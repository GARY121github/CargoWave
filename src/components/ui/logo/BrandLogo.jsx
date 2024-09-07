const BrandLogo = ({ imageSrc }) => {
    const defaultImageSrc = "/img/resource/logo-2.png";
    const logoSrc = imageSrc || defaultImageSrc;

    return (
        <img src={logoSrc} alt="" />
    );
};

export default BrandLogo;
