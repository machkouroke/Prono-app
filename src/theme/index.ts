import {extendTheme} from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            body: {
                fontFamily: "'Inter', sans-serif",
            },
        },
    },
    colors: {
        brand: {
            combination: '#6B46C1',
            single: '#3182CE'
        }
    },
    components: {
        Card: {
            baseStyle: {
                container: {
                    transition: 'transform 0.2s',
                    _hover: {
                        transform: 'scale(1.02)',
                    },
                },
            },
        },
    },
});

export default theme;