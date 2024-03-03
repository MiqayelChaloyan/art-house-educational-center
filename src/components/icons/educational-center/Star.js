function logo({ width, height, fill }) {
    return (
        <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
                <path d="M30.1457 11.325L21.0778 10.0071L17.0242 1.78929C16.9135 1.56429 16.7314 1.38215 16.5064 1.27143C15.9421 0.992863 15.2564 1.22501 14.9742 1.78929L10.9207 10.0071L1.8528 11.325C1.6028 11.3607 1.37423 11.4786 1.19923 11.6571C0.987665 11.8746 0.871082 12.1671 0.875101 12.4705C0.879119 12.7739 1.00341 13.0632 1.22066 13.275L7.78137 19.6714L6.23137 28.7036C6.19502 28.9137 6.21827 29.1298 6.29849 29.3273C6.3787 29.5249 6.51266 29.696 6.68519 29.8213C6.85771 29.9466 7.0619 30.0211 7.27459 30.0363C7.48727 30.0514 7.69996 30.0067 7.88851 29.9071L15.9992 25.6429L24.1099 29.9071C24.3314 30.025 24.5885 30.0643 24.8349 30.0214C25.4564 29.9143 25.8742 29.325 25.7671 28.7036L24.2171 19.6714L30.7778 13.275C30.9564 13.1 31.0742 12.8714 31.1099 12.6214C31.2064 11.9964 30.7707 11.4179 30.1457 11.325Z" fill={fill} />
            </g>
        </svg>
    );
}

export default logo;