function binarioADecimal (num: string): number {
   let rta: number = 0;
   for (let i = 0; i < num.length; i++) {
     rta += parseInt(num[num.length - 1 - i]) * (2 ** i);
   }
   return rta;
}

function decimalABinario (num: number): string {
   let rta: string = "";

   if (num === 0) {
      return "0";
   }
   while (num > 0) {
      rta = (num % 2).toString() + rta;
      num = Math.floor(num / 2);
   }
   return rta;
}

export { 
   binarioADecimal, 
   decimalABinario 
}
