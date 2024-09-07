import {PageHeader , ServiceDetails , CtaThree} from "../components/index"

const RoadTransport = () => {
    return (
        <>
            <PageHeader title="Road Transport" bgImage="/img/background/page-header-bg.jpg" />
            <ServiceDetails title="Road Transport Services" transportType="road"
                thumbnailOne="/img/service/services-details-img1.jpg"
                thumbnailTwo="/img/service/services-details-img2.jpg"
            />
            <CtaThree />
        </>
    )
}

export default RoadTransport