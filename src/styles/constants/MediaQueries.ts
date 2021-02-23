const sizes = {
  down(size: any){
    const sizes: any = {
      sm: '450px',
      md: '960px',
      lg: '1200px',
    }
    return `@media(max-width: ${sizes[size]})`
  }
};

export default sizes;