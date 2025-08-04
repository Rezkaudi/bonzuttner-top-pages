"use client"
import {
    Modal,
    ModalContent,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';


interface IMemberCard {
    data: member
}

const MemberCard: React.FC<IMemberCard> = ({ data }) => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const t = useTranslations('members.memberCard');
    const locale = useLocale() as 'ja' | 'en';

    return (
        <>
            <div className="w-[160px] lg:w-[382px] cursor-pointer space-y-4" onClick={onOpen}>
                <div className="relative w-full h-[170px] lg:h-[400px]">
                    <Image src={data?.imageSrc} alt={data?.name} fill className=" object-cover" />
                </div>

                <div className="w-full flex items-center justify-between border-l-2 border-[#00A1E9]">
                    <div className=" space-y-2 pl-7">
                        <span className="text-xs lg:text-lg font-normal">{data?.mainWork[locale]}</span>
                        <h2 className="text-xs lg:text-xl font-medium">{data?.name}</h2>
                    </div>
                    <Image src={"/images/arrow.svg"} alt={"arrow"} width={23} height={23} />
                </div>

            </div>
            <Modal
                className="mt-5 pt-5 overflow-auto"
                backdrop="opaque"
                scrollBehavior={"outside"}
                isOpen={isOpen}
                motionProps={{
                    variants: {
                        enter: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                                ease: "easeOut",
                            },
                        },
                        exit: {
                            y: -20,
                            opacity: 0,
                            transition: {
                                duration: 0.2,
                                ease: "easeIn",
                            },
                        },
                    },
                }}
                onOpenChange={onOpenChange}
            >
                <ModalContent className="max-w-[650px] m-5 px-5 lg:px-20 pt-10 lg:pt-20 pb-12">
                    {(onClose) => (
                        <>
                            <ModalBody className="w-full p-0 space-y-5">
                                <div className="relative w-full h-[300px] lg:h-[500px]">
                                    <Image src={data?.imageSrc} alt={data?.name} fill className="object-cover" />
                                </div>
                                <div className=" space-y-2 text-center ">
                                    <span className="text-lg font-normal">{data?.works[locale]}</span>
                                    <h2 className="text-xl font-medium">{data?.name}</h2>
                                </div>
                                <div className="space-y-7">
                                    <div className=" space-y-2">
                                        <span className=" inline-block w-[120px] text-center border border-[#00A1E9] rounded-full px-6 py-1 text-[#00A1E9] text-base font-medium">{t('birthplace')}</span>
                                        <p className="text-base font-normal">{data?.birthplace[locale]}</p>
                                    </div>

                                    <div className=" space-y-2">
                                        <span className=" inline-block w-[120px] text-center border border-[#00A1E9] rounded-full px-6 py-1 text-[#00A1E9] text-base font-medium">{t('hobby')}</span>
                                        <p className="text-base font-normal">{data?.hobby[locale]}</p>
                                    </div>

                                    <div className=" space-y-2">
                                        <span className=" inline-block w-[120px] text-center border border-[#00A1E9] rounded-full px-6 py-1 text-[#00A1E9] text-base font-medium">{t('comment')}</span>
                                        <p className="text-base font-normal">{data?.others[locale]}</p>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter className="w-full flex items-center  justify-center">
                                <Button className="bg-[#00A1E9] text-white text-sm" onPress={onClose}>
                                    {t('backToList')}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>

    )
};

export default MemberCard;
