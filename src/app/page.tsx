"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function CalculatorPage() {
  const [display, setDisplay] = useState("0");
  const [memory, setMemory] = useState(0);
  const [isResultShown, setIsResultShown] = useState(false);

  const evaluateExpression = (expr: string): string => {
    // Sanitize to prevent malicious code injection
    const sanitizedExpr = expr.replace(/[^-()\d/*+.]/g, '');

    // Don't evaluate if it ends with an operator, unless it's just a number
    if (/[-+/*]$/.test(sanitizedExpr) && sanitizedExpr.length > 1) {
      // Allow evaluation if we have something like '5*-2'
      const lastOpIndex = Math.max(sanitizedExpr.lastIndexOf('+'), sanitizedExpr.lastIndexOf('-'), sanitizedExpr.lastIndexOf('*'), sanitizedExpr.lastIndexOf('/'));
      if(lastOpIndex === sanitizedExpr.length - 1) {
         return "Error";
      }
    }
    
    try {
      const result = new Function('return ' + sanitizedExpr)();
      if (!isFinite(result)) {
        return "Error";
      }
      return String(result);
    } catch (error) {
      return "Error";
    }
  };

  const handleDigitClick = (digit: string) => {
    if (isResultShown || display === "0") {
      setDisplay(digit);
      setIsResultShown(false);
    } else {
      setDisplay(prev => prev + digit);
    }
  };

  const handleDecimalClick = () => {
    if (isResultShown) {
      setDisplay("0.");
      setIsResultShown(false);
      return;
    }

    const operators = ['+', '-', '*', '/'];
    let lastNumberStartIndex = 0;
    for (let i = display.length - 1; i >= 0; i--) {
        if(operators.includes(display[i])) {
            lastNumberStartIndex = i + 1;
            break;
        }
    }
    const lastNumber = display.substring(lastNumberStartIndex);

    if (!lastNumber.includes('.')) {
      setDisplay(prev => prev + '.');
    }
  };

  const handleOperatorClick = (operator: string) => {
    setIsResultShown(false);
    const lastChar = display.slice(-1);
    
    if (display === "0" && operator === "-") {
        setDisplay("-");
        return;
    }

    if (['+', '*', '/'].includes(lastChar)) {
      setDisplay(prev => prev.slice(0, -1) + operator);
    } else if (lastChar === '-') {
       const secondLastChar = display.slice(-2, -1);
       if(['+', '-', '*', '/'].includes(secondLastChar)) {
         setDisplay(prev => prev.slice(0, -1) + operator);
       } else {
         setDisplay(prev => prev + operator);
       }
    } else {
      setDisplay(prev => prev + operator);
    }
  };

  const handleEqualsClick = () => {
    if (display === "Error") return;
    const result = evaluateExpression(display);
    setDisplay(result);
    setIsResultShown(true);
  };

  const handleClearClick = () => {
    setDisplay("0");
    setIsResultShown(false);
  };

  const handleMemoryClick = (type: 'MC' | 'MR' | 'MS' | 'M+' | 'M-') => {
    setIsResultShown(false);

    const valueForMemOp = (str: string) => {
      if(str === "Error") return NaN;
      const result = evaluateExpression(str);
      return result === "Error" ? NaN : parseFloat(result);
    }

    switch (type) {
      case 'MC':
        setMemory(0);
        break;
      case 'MR':
        setDisplay(String(memory));
        break;
      case 'MS': {
        const val = valueForMemOp(display);
        if (!isNaN(val)) setMemory(val);
        break;
      }
      case 'M+': {
        const val = valueForMemOp(display);
        if (!isNaN(val)) setMemory(prev => prev + val);
        break;
      }
      case 'M-': {
        const val = valueForMemOp(display);
        if (!isNaN(val)) setMemory(prev => prev - val);
        break;
      }
    }
  };

  const buttonClass = "h-16 text-2xl font-semibold transition-transform active:scale-95";

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 font-body">
      <h1 className="mb-4 text-4xl font-bold font-headline text-primary-foreground opacity-80">Calc-U-Later</h1>
      <Card className="w-full max-w-xs shadow-2xl overflow-hidden">
        <CardContent className="p-4 space-y-4">
          <div className="rounded-lg bg-muted p-4 text-right break-words">
            <p className="text-4xl font-headline font-semibold text-right text-foreground break-all" style={{minHeight: '3rem'}}>{display}</p>
          </div>

          <div className="grid grid-cols-5 gap-2">
            {['MC', 'MR', 'M+', 'M-', 'MS'].map((label) => (
              <Button key={label} onClick={() => handleMemoryClick(label as any)} variant="secondary" className={cn(buttonClass, 'h-12 text-base')}>
                {label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-2">
            <Button onClick={handleClearClick} className={cn(buttonClass)} variant="secondary">C</Button>
            <Button onClick={() => handleDigitClick('7')} className={cn(buttonClass)} variant="primary">7</Button>
            <Button onClick={() => handleDigitClick('8')} className={cn(buttonClass)} variant="primary">8</Button>
            <Button onClick={() => handleDigitClick('9')} className={cn(buttonClass)} variant="primary">9</Button>
            <Button onClick={() => handleOperatorClick('/')} className={cn(buttonClass)} variant="secondary">/</Button>

            <Button onClick={() => handleDigitClick('4')} className={cn(buttonClass)} variant="primary">4</Button>
            <Button onClick={() => handleDigitClick('5')} className={cn(buttonClass)} variant="primary">5</Button>
            <Button onClick={() => handleDigitClick('6')} className={cn(buttonClass)} variant="primary">6</Button>
            <Button onClick={() => handleOperatorClick('*')} className={cn(buttonClass)} variant="secondary">*</Button>

            <Button onClick={() => handleDigitClick('1')} className={cn(buttonClass)} variant="primary">1</Button>
            <Button onClick={() => handleDigitClick('2')} className={cn(buttonClass)} variant="primary">2</Button>
            <Button onClick={() => handleDigitClick('3')} className={cn(buttonClass)} variant="primary">3</Button>
            <Button onClick={() => handleOperatorClick('-')} className={cn(buttonClass)} variant="secondary">-</Button>

            <Button onClick={() => handleDigitClick('0')} className={cn(buttonClass, "col-span-2")} variant="primary">0</Button>
            <Button onClick={handleDecimalClick} className={cn(buttonClass)} variant="primary">.</Button>
            <Button onClick={() => handleOperatorClick('+')} className={cn(buttonClass)} variant="secondary">+</Button>

            <Button onClick={handleEqualsClick} className={cn(buttonClass, "col-span-4")} variant="accent">=</Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}