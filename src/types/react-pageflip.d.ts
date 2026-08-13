declare module 'react-pageflip' {
  import React from 'react';

  export interface FlipBookProps {
    width?: number;
    height?: number;
    minWidth?: number;
    minHeight?: number;
    maxWidth?: number;
    maxHeight?: number;
    size?: 'fixed' | 'stretch';
    startPage?: number;
    style?: React.CSSProperties;
    className?: string;
    drawShadow?: boolean;
    flippingTime?: number;
    usePortrait?: boolean;
    startZIndex?: number;
    autoSize?: boolean;
    maxShadowOpacity?: number;
    showCover?: boolean;
    mobileScrollSupport?: boolean;
    clickEventForward?: boolean;
    useMouseEvents?: boolean;
    swipeDistance?: number;
    showPageCorners?: boolean;
    children?: React.ReactNode;
  }

  const HTMLFlipBook: React.FC<FlipBookProps>;

  export default HTMLFlipBook;
}


export interface Alltypes{
results:Resulttype[]
}
interface Resulttype{
  id: number
  icon_name:string
  image:string
  content_ar: string
  content_en: string
  icon: string
  title_ar: string
  title_en: sting
}
export interface CharType{
  results:Subtype[]

}
interface Subtype{
experience: number
id: number
image: string
jop_ar: string
jop_en: string
name_ar: string
name_en: string
}

