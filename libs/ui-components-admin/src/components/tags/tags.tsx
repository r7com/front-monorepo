import React from 'react'

export type TagsProps = {
  size: 'medium' | 'small' | 'large'
  color: 'primary' | 'secondary' | 'tertiary' | 'neutral'
  children: React.ReactNode
}

export const Tags = ({ color, size, children }: TagsProps) => {
  const sizes = {
    large: 'p-[8px] h-[32px]',
    medium: 'px-[8px] py-[4px] h-[26px]',
    small: 'py-[2px] px-[8px] h-[22px]',
  }[size]

  const colors = {
    primary: 'bg-[#218EE1] text-[#FFFFFF]',
    secondary: 'bg-[#FFFFFF] border-[2px] border-[#218EE1] text-[#218EE1]',
    tertiary: 'bg-[#1A72B4] text-[#FFFFFF]',
    neutral: 'bg-[#DDDDE1] text-[#000000]',
  }[color]

  return (
    <span
      className={`${colors} ${sizes} font-[400] flex w-[fit-content] items-center justify-center rounded-[100px] text-[12px] uppercase`}
    >
      {children}
    </span>
  )
}
