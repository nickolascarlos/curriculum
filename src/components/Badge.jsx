export default function Badge({link, target = 'blank', alt, badgeStyle = 'for-the-badge', text, color, logo, logoColor = 'white', style = {}}) {
    return (
        <a href={link} target={target}>
            <img
                alt={alt ?? `${text} badge`}
                style={{overflow: 'hidden', borderRadius: '2px', ...style}}
                src={`https://img.shields.io/badge/${text}-${color}?style=${badgeStyle}&logo=${logo}&logoColor=${logoColor}`}/>
        </a>
    )
}