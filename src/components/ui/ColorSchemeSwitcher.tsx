"use client";

import * as React from "react";
import { Check, Palette } from "lucide-react";
import { useColorScheme } from "@/components/providers/ColorSchemeProvider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";

const colorSchemes = [
  { name: "Purple", value: "purple", color: "bg-purple-500" },
  { name: "Blue", value: "blue", color: "bg-blue-500" },
  { name: "Green", value: "green", color: "bg-green-500" },
  { name: "Orange", value: "orange", color: "bg-orange-500" },
];

export function ColorSchemeSwitcher() {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle color scheme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {colorSchemes.map((scheme) => (
          <DropdownMenuItem
            key={scheme.value}
            onClick={() =>
              setColorScheme(
                scheme.value as "purple" | "blue" | "green" | "orange"
              )
            }
            className="flex items-center justify-between"
          >
            <div className="flex items-center space-x-2">
              <div className={`w-4 h-4 rounded-full ${scheme.color}`} />
              <span>{scheme.name}</span>
            </div>
            {colorScheme === scheme.value && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
