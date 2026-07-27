"use client";

import React, { Component, ReactNode } from "react";
import { Sparkles, Aperture } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class CanvasErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.warn("3D WebGL Canvas error caught by boundary, rendering 2D kinetic fallback:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0">
          {/* Animated 2D Glowing Aperture Ring Fallback */}
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 backdrop-blur-3xl animate-pulse-slow flex items-center justify-center shadow-cyan-glow">
            <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full border border-violet-500/40 animate-glow-spin flex items-center justify-center">
              <Aperture className="w-24 h-24 sm:w-32 sm:h-32 text-cyan-bright opacity-60 animate-spin" style={{ animationDuration: '30s' }} />
            </div>
            {/* Ambient glows */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-glow/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-violet-neon/20 rounded-full blur-2xl" />
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
