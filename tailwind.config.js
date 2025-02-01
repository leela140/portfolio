tailwind.config = {
    theme:{
        gridTemplateColumns:{
            'auto': 'repeat(auto-fit, minmax(200px,1fr))'
        },
        fontfamily:{
            Outfit: ["Outfit", "sans-serif"],
            Ovo: ["Ovo", "serif"]
        },
        colors:{
            lightHover: '#fcf4ff',
            darkHover: '#2a004a',
            darktheme: '#11001F',
        }
    },
    darkMode: 'selector'
}