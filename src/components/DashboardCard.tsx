import { Card, Heading, Text, HStack, Box, Flex } from "@chakra-ui/react";
import { cardStyles } from "@/utils/card-styles";

type DashboardCardProps = {
  type: keyof typeof cardStyles;
  title: string;
  value: number;
  description: string;
};

function DashboardCard({ type, title, value, description }: DashboardCardProps) {
  const { icon: Icon, cardBgColor, iconBgColor, iconColor } = cardStyles[type];

  return (
    <Card.Root bg={cardBgColor} w="300px" p={6} borderRadius="md" mb="20px" border="none" cursor="pointer" _hover={{ transition: "all 0.3s ease", boxShadow:"xl"}}> {/*transform: "scale(1.02)"*/}
      <Card.Header p={0} mb={2}>
        <Flex justify="space-between" gap="10px">
          <Box>
            <Heading size="lg">
              {title}
            </Heading>
            <Heading size="xl" fontWeight="bold">
              {value}
            </Heading>
          </Box>

          <HStack
            bg={iconBgColor}
            w="40px"
            h="40px"
            justify="center"
            align="center"
            borderRadius="md"
          >
            <Icon size={25} color={iconColor} />
          </HStack>
        </Flex>
      </Card.Header>

      <Card.Body p={0}>
        <Text fontSize="sm" color="gray.600">
          {description}
        </Text>
      </Card.Body>
    </Card.Root>
  );
}

export { DashboardCard };
