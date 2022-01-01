
import { Appearance } from 'react-native'

const colorScheme = Appearance.getColorScheme();

function choosColormode() {
    if (colorScheme === 'dark') {
        return (
            {
                Primary: '#FF7878',
                Secondary: '#38A3A5',
                statusBar: 'light-content',
                SecondaryLight:"#bae3dc",
                BackgroundCard:'#daf7f4',
                border: '#444',
                borderLight: '#333',
                BackgroundPrimary: '#111',
                BackgroundSecondary: '#222',
                subtextColor: '#ccc',
                textColor: '#eee',
                Danger:"#df3b3b",
            }
        );
    }
    else {
        return (
            {
                Primary: '#FF7878',
                Secondary: '#38A3A5',
                SecondaryLight:"#bae3dc",
                BackgroundCard:'#daf7f4',
                statusBar: 'dark-content',
                border: '#ddd',
                borderLight: '#eee',
                Danger:"#df3b3b",
                BackgroundPrimary: '#fff',
                BackgroundSecondary: '#f6f6f6',
                subtextColor: '#999',
                textColor: '#111',
            }
        )
    }
}
export const ColorPallets = choosColormode();

