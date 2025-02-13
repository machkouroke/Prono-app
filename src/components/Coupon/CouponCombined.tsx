import { VStack, HStack, Text, Badge, Box, Divider } from '@chakra-ui/react';
import CouponEvent from './CouponEvent';

const CouponCombined = ({ coupon }: { coupon: Coupon }) => {
  return (
    <VStack width="100%" align="start" spacing={4}>
      <Text fontSize="lg" fontWeight="bold" color="purple.600">
        Combiné ({coupon.events.length} sélections)
      </Text>

      {coupon.events.map((event, index) => (
        <Box key={index} width="100%">
          <CouponEvent event={event} />
          {index < coupon.events.length - 1 && (
            <HStack spacing={2} my={2}>
              <Divider orientation="horizontal" borderColor="gray.300" />
              <Text fontSize="sm" color="gray.500">+</Text>
              <Divider orientation="horizontal" borderColor="gray.300" />
            </HStack>
          )}
        </Box>
      ))}

      <HStack spacing={4} mt={4}>
        <Badge colorScheme="purple" fontSize="md">
          Cote combinée: {coupon.odds.toFixed(2)}
        </Badge>
        <Badge colorScheme="green" fontSize="md">
          Potentiel: {(coupon.stake * coupon.odds).toFixed(2)}x
        </Badge>
      </HStack>
    </VStack>
  );
};

export default CouponCombined;