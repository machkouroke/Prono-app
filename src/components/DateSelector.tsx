import { useRef } from "react";
import { Box, Text, Input, Popover, PopoverTrigger, PopoverContent, PopoverBody, useDisclosure } from "@chakra-ui/react";

export function DateSelector({selectedDate, setSelectedDate}:
                             { selectedDate: Date, setSelectedDate: (date: Date) => void }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const inputRef = useRef<HTMLInputElement | null>(null);

    // Fonction pour formater la date en "22 Janv. 2000"
    const formatDate = (date: Date) => {
        const options: Intl.DateTimeFormatOptions = { day: "2-digit", month: "short", year: "numeric" };
        return date.toLocaleDateString("fr-FR", options).replace(".", ""); // Retire le point après le mois
    };

    const today = new Date();
    const isToday = selectedDate.toDateString() === today.toDateString();
    const displayText = isToday ? "Pronostics du Jour" : formatDate(selectedDate);

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newDate = event.target.value ? new Date(event.target.value) : new Date();
        setSelectedDate(newDate);
        onClose();
    };

    return (
        <Popover isOpen={isOpen} onClose={onClose} placement="bottom-start">
            <PopoverTrigger>
                <Box
                    as="button"
                    onClick={onOpen}
                    bg="transparent"
                    _hover={{ textDecoration: "underline" }}
                >
                    <Text fontSize="lg" fontWeight="bold">{displayText}</Text>
                </Box>
            </PopoverTrigger>
            <PopoverContent w="auto">
                <PopoverBody>
                    <Input
                        type="date"
                        ref={inputRef}
                        onChange={handleDateChange}
                        defaultValue={selectedDate.toISOString().split("T")[0]}
                        autoFocus
                    />
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
}
