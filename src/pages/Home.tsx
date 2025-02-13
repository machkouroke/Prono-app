import {Box, Heading, VStack, useColorModeValue, Flex, IconButton} from '@chakra-ui/react';
import CouponCard from '../components/Coupon/CouponCard';
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {DateSelector} from "../components/DateSelector.tsx";
import {useState} from "react";
import {useGetCouponsDataQuery} from "../services/Coupons.ts";
import {Loader} from "../components/Loader/Loader.tsx";

function formatDate(date: Date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0 en JS
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
}

const Home = () => {
    const bg = useColorModeValue('gray.50', 'gray.800');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const {
        isLoading,
        data,
        refetch
    } = useGetCouponsDataQuery({date: formatDate(selectedDate)});
    const content = () => {
        if (isLoading) return <Loader/>
        if (!data?.detail) return <Box>no data</Box>

        return <VStack spacing={8} maxW="1200px" w={"100%"} mx="auto">
            <Heading width="100%" as="h1" size="xl" textAlign="center" mb={8}>
                <Flex width="100%" justifyContent={'space-between'}>
                    <IconButton
                        colorScheme='blue'
                        aria-label='left arrow'
                        onClick={() => {
                            const newDate = new Date(selectedDate);
                            newDate.setDate(selectedDate.getDate() - 1);
                            setSelectedDate(newDate);
                            refetch();
                        }}
                        disabled={formatDate(selectedDate) === data.detail.min_date}
                        icon={<FaChevronLeft/>}
                    />
                    <DateSelector selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
                    <IconButton
                        colorScheme='blue'
                        aria-label='right arrow'
                        icon={<FaChevronRight/>}
                        onClick={() => {
                            const newDate = new Date(selectedDate);
                            newDate.setDate(selectedDate.getDate() + 1);
                            setSelectedDate(newDate);
                            refetch();
                        }}
                        disabled={formatDate(selectedDate) === data.detail.max_date}
                    />
                </Flex>
            </Heading>
            {!data.detail.coupon ? <div>Aucune donnée aujourd'hui</div> : <>
                <Box

                    bg="whiteAlpha.900"
                    p={6}
                    borderRadius="xl"
                    boxShadow="2xl"
                    backdropFilter="blur(10px)"
                    width="100%"
                >
                    <Heading size="md" color="green.600" mb={4}>
                        Conseil global :
                    </Heading>
                    {data.detail.coupon.global_advice}
                </Box>

                {data.detail.coupon.coupons.map((coupon, index) => (
                    <CouponCard key={index} coupon={coupon}/>
                ))}</>

            }
        </VStack>
    }
    return (
        <Box p={8} minH="100vh" bg={bg}>
            {content()}
        </Box>
    );
};

export default Home;