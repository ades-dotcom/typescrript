function plus(x: number | string | undefined, y: number | string | undefined): number | string | undefined {
    if (typeof x === "number" && typeof y === "number") {
      return x + y;
    } else if (x === undefined || y === undefined) {
      return undefined;
    } else {
      return String(x) + String(y);
    }
  }
  
  console.log(plus(2025, 1));          // 2026
  console.log(plus(undefined, 21));   // undefined
  console.log(plus("StackUp", "Learn")); // StackUpLearn  