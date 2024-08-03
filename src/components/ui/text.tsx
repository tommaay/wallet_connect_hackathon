import React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "lib/utils";

const textVariants = cva("", {
  variants: {
    variant: {
      h1: "text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl",
      h2: "text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl",
      h3: "text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl",
      h4: "text-lg font-medium sm:text-xl md:text-2xl lg:text-3xl",
      h5: "text-base font-medium sm:text-lg md:text-xl lg:text-2xl",
      h6: "text-base font-medium md:text-lg lg:text-xl",
      p: "text-sm sm:text-base",
      small: "text-xs sm:text-sm",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>,
    VariantProps<typeof textVariants> {}

const Text = React.forwardRef<HTMLHeadingElement | HTMLParagraphElement, TextProps>(
  ({ className, variant, ...props }, ref) => {
    const Comp = variant || "p";
    return <Comp className={cn(textVariants({ variant, className }))} ref={ref} {...props} />;
  }
);

Text.displayName = "Text";

export { Text, textVariants };
