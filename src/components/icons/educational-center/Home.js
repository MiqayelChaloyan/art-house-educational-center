function logo({ width, height, fill }) {
    return (
        <svg width={width} height={height} viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 21.375C1.8125 21.375 1.22417 21.1386 0.735 20.6657C0.245 20.192 0 19.6229 0 18.9583V8.08334C0 7.7007 0.0887498 7.3382 0.26625 6.99584C0.442916 6.65348 0.6875 6.37153 1 6.15L8.5 0.712505C8.72917 0.551394 8.96875 0.430561 9.21875 0.350005C9.46875 0.269449 9.72917 0.229172 10 0.229172C10.2708 0.229172 10.5312 0.269449 10.7812 0.350005C11.0312 0.430561 11.2708 0.551394 11.5 0.712505L19 6.15C19.3125 6.37153 19.5575 6.65348 19.735 6.99584C19.9117 7.3382 20 7.7007 20 8.08334V18.9583C20 19.6229 19.7554 20.192 19.2663 20.6657C18.7763 21.1386 18.1875 21.375 17.5 21.375H12.5V12.9167H7.5V21.375H2.5Z" fill={fill} />
        </svg>
    );
}

export default logo;