'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'glass'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  href?: string
  external?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    children, 
    href, 
    external = false,
    ...props 
  }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
    
    const variants = {
      primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:ring-primary-500',
      secondary: 'bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-secondary-900 focus:ring-white/50',
      accent: 'bg-accent-500 hover:bg-accent-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:ring-accent-500',
      glass: 'bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 text-white focus:ring-white/20'
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    }

    const classes = clsx(
      baseClasses,
      variants[variant],
      sizes[size],
      className
    )

    const MotionComponent = motion.button

    if (href) {
      return (
        <motion.a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className={classes}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {children}
        </motion.a>
      )
    }

    return (
      <MotionComponent
        className={classes}
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={props.onClick}
        disabled={props.disabled}
        type={props.type}
        form={props.form}
        id={props.id}
        name={props.name}
        value={props.value}
        tabIndex={props.tabIndex}
        title={props.title}
      >
        {children}
      </MotionComponent>
    )
  }
)

Button.displayName = 'Button'

export default Button 