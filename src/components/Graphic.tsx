import React from 'react';
import { DataGraphicProps } from '@/utils/data-graphic';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from 'chart.js';
import { Box, Flex, Text, Box as ChakraBox, Heading } from '@chakra-ui/react';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

interface GraphicProps {
  data: DataGraphicProps[];
}

const Graphic: React.FC<GraphicProps> = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: 'Kits com sucesso',
        data: data.map(item => item.ks),
        backgroundColor: '#16a34a',
        borderRadius: 3,
        barThickness: 20,
      },
      {
        label: 'Kits com divergência',
        data: data.map(item => item.kd),
        backgroundColor: '#dc2626',
        borderRadius: 3,
        barThickness: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 10,
          },
          color: '#888890',
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
          color: '#888890',
          stepSize: 10,
        },
        beginAtZero: true,
        suggestedMax: 50,
      },
    },
  };

  return (
    <Box w="100%" h="400px" border="sm" p="4" rounded="md" bg="#f9fbfd" borderColor="#e8e8e8">

      <Heading mb={2}>Panorama de Cirurgias</Heading>
      
      <Flex mb={4} align="center" gap={4}>
        <Flex align="center">
          <ChakraBox w="16px" h="16px" bg="#16a34a" borderRadius="3px" />
          <Text ml={2} fontSize="16px" fontWeight="500" color="#374151">
            Kits com sucesso
          </Text>
        </Flex>

        <Flex align="center">
          <ChakraBox w="16px" h="16px" bg="#dc2626" borderRadius="3px" />
          <Text ml={2} fontSize="16px" fontWeight="500" color="#374151">
            Kits com divergência
          </Text>
        </Flex>
      </Flex>

      <Bar data={chartData} options={options} />
      
    </Box>
  );
};

export { Graphic };
