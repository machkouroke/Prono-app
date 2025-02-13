import {HStack, Text, Box, Badge} from '@chakra-ui/react';

// Ajouter ces imports

// Modifier la structure
const CouponEvent = ({ event }: { event: CouponEvent }) => {
  return (
    <Box width="100%">
      <HStack justify="space-between" py={2}>
        <Text fontWeight="semibold">
          {event.home_team} vs {event.away_team}
        </Text>
        <HStack spacing={3}>
          <Badge colorScheme="blue">{event.type}</Badge>
          <Text color="green.600" fontWeight="bold">
            {event.odds.toFixed(2)}
          </Text>
        </HStack>
      </HStack>

      <Text fontStyle="italic" color="gray.600" fontSize="sm">
        {event.details}
      </Text>
    </Box>
  );
};

export default CouponEvent;