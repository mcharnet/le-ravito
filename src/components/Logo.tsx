import React from 'react'

interface LogoProps {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  showText = true, 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-lg',
    md: 'px-6 py-3 text-2xl',
    lg: 'px-8 py-4 text-3xl'
  }

  const logoSizes = {
    sm: 32,
    md: 40,
    lg: 48
  }

  if (!showText) {
    return (
      <div className={`flex items-center ${className}`}>
        <div 
          className={`bg-accent-orange rounded-full flex items-center justify-center text-white font-bold`}
          style={{ width: logoSizes[size], height: logoSizes[size] }}
        >
          R
        </div>
      </div>
    )
  }

  return (
    <div className={`group inline-block ${className}`}>
      <div 
        className={`
          relative 
          bg-accent-blue 
          border-l-4 
          border-accent-orange 
          rounded-lg 
          ${sizeClasses[size]}
          transition-transform 
          duration-300 
          hover:scale-105 
          cursor-pointer
        `}
      >
        <div className="flex items-center gap-2">
          <div 
            className={`bg-accent-orange rounded-full flex items-center justify-center text-white font-bold`}
            style={{ width: logoSizes[size], height: logoSizes[size] }}
          >
            R
          </div>
          <div className="relative">
            {/* Shadow text layer */}
            <div 
              className="
                absolute 
                -left-1 
                -bottom-1 
                font-lilita 
                uppercase 
                tracking-wider 
                text-black 
                z-0
                flex
                gap-2
              "
            >
              <span>Le</span>
              <span>Ravito</span>
            </div>
            
            {/* Front text layer */}
            <div 
              className="
                relative 
                font-lilita 
                uppercase 
                tracking-wider 
                text-light-white 
                z-10
                flex
                gap-2
              "
            >
              <span>Le</span>
              <span>Ravito</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logo
