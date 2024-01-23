export const pageVariants = {
    initial: { 
        opacity: 0, 
        y: '100%',
    },
    final: {
        opacity: 1, 
        y: '0%',
        transition: {
            duration: 1
        }
    },
    out: {
        opacity: 0, 
        y: '-100%',
        transition: {
            duration: 0.5
        }
    }
};