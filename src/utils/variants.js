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

export const questionVariants = {
    initial: {
        opacity: 0
    },
    final: {
        opacity: 1
    },
    out: {
        opacity: 0
    }
};

export const feedbackVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        transition: {duration: 0.2}
    },
    visible: {
        opacity: 1,
        scale: 1.5,
        transition: {duration: 0.2}
    }
}