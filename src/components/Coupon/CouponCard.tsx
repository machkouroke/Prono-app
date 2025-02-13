import {Card, CardBody, Flex, Tag, Text, VStack, HStack, Badge} from '@chakra-ui/react';
import CouponEvent from './CouponEvent';
import CouponCombined from "./CouponCombined.tsx";

const CouponCard = ({coupon}: { coupon: Coupon }) => {
    const getTypeColor = () => {
        return coupon.type === 'Combination' ? 'purple' : 'blue';
    };

    return (
        <Card
            width="100%"
            variant="elevated"
            borderRadius="xl"
            boxShadow="lg"
            backdropFilter="blur(10px)"
            bg="whiteAlpha.900"
        >
            <CardBody p={6}>
                <Flex justify="space-between" mb={4}>
                    <Tag colorScheme={getTypeColor()} size="lg">
                        {coupon.type}
                    </Tag>
                    <Badge colorScheme="green" fontSize="lg" px={3} py={1}>
                        Mise : {(coupon.stake * 100).toFixed(0)}%
                    </Badge>
                </Flex>

                <VStack align="start" spacing={4}>
                    <Text fontWeight="bold" fontSize="xl">
                        {coupon.details}
                    </Text>

                    <HStack spacing={4}>
                        <Badge colorScheme="orange" fontSize="md" px={3}>
                            Cote : {coupon.odds.toFixed(2)}
                        </Badge>
                        <Text fontSize="sm" fontStyle="italic">
                            {coupon.advice}
                        </Text>
                    </HStack>

                    <VStack spacing={3} width="100%">
                        {coupon.type === 'Combination' ? (
                            <CouponCombined coupon={coupon}/>
                        ) : (
                            coupon.events.map((event, index) => (
                                <CouponEvent key={index} event={event}/>
                            ))
                        )}
                    </VStack>
                </VStack>
            </CardBody>
        </Card>
    );
};

export default CouponCard;