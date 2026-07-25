"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import type { ReactNode } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogTitle = DialogPrimitive.Title;
export const DialogDescription = DialogPrimitive.Description;

export function DialogContent({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md data-[state=open]:animate-in" />
      <DialogPrimitive.Content
        className={cn(
          "fixed left-1/2 top-1/2 z-50 max-h-[86vh] w-[min(92vw,980px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-white/12 bg-background/95 p-6 shadow-2xl backdrop-blur-xl focus:outline-none",
          className,
        )}
      >
        {children}
        <DialogPrimitive.Close asChild>
          <Button
            aria-label="Close project details"
            className="absolute right-4 top-4"
            size="icon"
            variant="secondary"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}
