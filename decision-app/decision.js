class SkincareDecision {
    constructor() {
      this.baseRoutine = [
        "Use a gentle cleanser",
        "Use a light-weight moisturizer",
        "Use sunscreen daily",
      ];
    }
    getRoutine(skinConcern, isSensitive) {
      if (skinConcern === "acne" && isSensitive === "yes") {
        return [
          ...this.baseRoutine,
          "Use an acne treatment product",
          "Use a gentle serum treatment product",
        ];
      } else if (skinConcern === "acne") {
        return [
          ...this.baseRoutine,
          "Use a retinol or vitamin C to fade scars",
          "Use a hyaluronic acid serum.",
        ];
      } else if (skinConcern === "dehydrated" && isSensitive === "yes") {
        return [
          ...this.baseRoutine,
          "Apply a rich moisturizer.",
          "Use a hyaluronic acid serum.",
        ];
      } else if (skinConcern === "dehydrated") {
        return [
          ...this.baseRoutine,
          "Apply a nourishing moisturizer.",
          "Consider using a face mask for extra hydration.",
        ];
      } else if (skinConcern === "combination" && isSensitive === "yes") {
        return [
          ...this.baseRoutine,
          "Use a gentle toner to balance oil.",
          "Apply a lightweight, non-comedogenic moisturizer.",
        ];
      } else if (skinConcern === "combination") {
        return [
          ...this.baseRoutine,
          "Use a foaming cleanser for oily areas.",
          "Apply a gel-based moisturizer to control oil.",
        ];
      } else if (skinConcern === "oily" && isSensitive === "yes") {
        return [
          ...this.baseRoutine,
          "Use an oil-free, gentle cleanser.",
          "Apply a lightweight moisturizer.",
        ];
      } else if (skinConcern === "oily") {
        return [
          ...this.baseRoutine,
          "Use a salicylic acid cleanser.",
          "Apply a gel-based or mattifying moisturizer.",
        ];
      } else {
        return this.baseRoutine;
      }
    }
  }

export default SkincareDecision;