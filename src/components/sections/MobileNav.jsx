import data from "../../lib/data";
import BackgroundPattern from "../../assets/chakras.png";
import shared from "../../lib/shared";

export const MobileNav = ({ onMenuToggle, onButtonClick }) => {
    return (
        <div
            className="flex flex-col absolute px-body py-1 items-center gap-[200px] h-dvh w-dvw"
            style={{ backgroundImage: `url(${BackgroundPattern.src})` }}>
            <button className="self-end" onClick={onMenuToggle}>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_192_402)">
                        <path
                            opacity="0.978"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.55273 -0.0292969C1.80664 -0.0292969 2.06055 -0.0292969 2.31445 -0.0292969C2.62784 0.0660721 2.9208 0.212556 3.19336 0.410156C7.11018 4.33673 11.036 8.25275 14.9707 12.1582C18.9054 8.25275 22.8312 4.33673 26.748 0.410156C27.0206 0.212556 27.3136 0.0660721 27.627 -0.0292969C27.8808 -0.0292969 28.1348 -0.0292969 28.3887 -0.0292969C29.1762 0.178779 29.7036 0.66706 29.9707 1.43555C29.9707 1.76758 29.9707 2.09961 29.9707 2.43164C29.8724 2.72569 29.7259 2.99912 29.5312 3.25195C25.6153 7.16795 21.6992 11.084 17.7832 15C21.7188 18.9356 25.6543 22.8711 29.5898 26.8066C29.7504 27.0496 29.8774 27.3035 29.9707 27.5684C29.9707 27.9004 29.9707 28.2324 29.9707 28.5645C29.7204 29.2249 29.2712 29.6936 28.623 29.9707C28.2324 29.9707 27.8418 29.9707 27.4512 29.9707C27.1837 29.8562 26.9298 29.7097 26.6895 29.5312C22.7921 25.6242 18.8859 21.7277 14.9707 17.8418C11.0555 21.7277 7.14926 25.6242 3.25195 29.5312C3.01162 29.7097 2.75771 29.8562 2.49023 29.9707C2.09961 29.9707 1.70899 29.9707 1.31836 29.9707C0.670195 29.6936 0.220978 29.2249 -0.0292969 28.5645C-0.0292969 28.2324 -0.0292969 27.9004 -0.0292969 27.5684C0.0640594 27.3035 0.191013 27.0496 0.351562 26.8066C4.28711 22.8711 8.22264 18.9356 12.1582 15C8.24221 11.084 4.32617 7.16795 0.410156 3.25195C0.215521 2.99912 0.0690363 2.72569 -0.0292969 2.43164C-0.0292969 2.09961 -0.0292969 1.76758 -0.0292969 1.43555C0.23784 0.66706 0.765182 0.178779 1.55273 -0.0292969Z"
                            fill="#5A8D91"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_192_402">
                            <rect width="30" height="30" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </button>
            <div className="flex flex-col items-center gap-standard">
                <div className="flex flex-col gap-5 uppercase text-center font-semibold">
                    {data.navbar.map((navItem, i) => (
                        <a href={navItem.url} key={i} onClick={onButtonClick}>
                            {navItem.name}
                        </a>
                    ))}
                </div>
                <a
                    href="#order"
                    onClick={onButtonClick}
                    className="bg-primary text-white text-20 leading-5 uppercase  px-[30px] py-2.5 rounded-button self-center">
                    {shared.cta}
                </a>
            </div>
        </div>
    );
};
