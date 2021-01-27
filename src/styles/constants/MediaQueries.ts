const sizes = {
  down(size: any){
    const sizes: any = {
      xs: '576px',
      sm: '768px',
      md: '960px',
      lg: '1200px',
    }
    return `@media(max-width: ${sizes[size]})`
  }
};

export default sizes;