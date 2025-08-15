import React, { useState } from 'react';
import { X, Loader2 } from 'lucide-react';

export const PopoverForm = ({ 
  title, 
  open, 
  setOpen, 
  width = "320px", 
  height = "auto",
  showCloseButton = true, 
  showSuccess = false, 
  openChild, 
  successChild 
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      
      {/* Popover */}
      <div
        className="relative rounded-2xl border-2 border-cyan-500/30 bg-slate-950/90 backdrop-blur-xl modal-glow"
        style={{ width, height: height !== "auto" ? height : undefined }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          {showCloseButton && (
            <button
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
        
        {/* Content */}
        <div className="text-white">
          {showSuccess ? successChild : openChild}
        </div>
      </div>
    </div>
  );
};

export const PopoverFormButton = ({ loading, text, ...props }) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-4 py-2.5 text-sm font-medium text-white transition-all hover:from-indigo-600 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed"
      {...props}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" />}
      {text}
    </button>
  );
};

export const PopoverFormSuccess = ({ title, description }) => {
  return (
    <div className="p-6 text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
        <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/70 text-sm">{description}</p>
    </div>
  );
};

export const PopoverFormSeparator = () => {
  return <div className="h-px bg-white/10 w-full" />;
};

export const PopoverFormCutOutLeftIcon = () => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" className="text-white/10">
      <path d="M12 0H0v12h12V0z" fill="currentColor"/>
    </svg>
  );
};

export const PopoverFormCutOutRightIcon = () => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" className="text-white/10">
      <path d="M12 0H0v12h12V0z" fill="currentColor"/>
    </svg>
  );
};
