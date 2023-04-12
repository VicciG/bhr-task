export const defaultMockData = [
  {
    key: 1,
    employeeName: "John Smith",
    absenceType: "Illness",
    startDate: "02/05/2023",
    endDate: "03/05/2023",
    approvalStatus: "Approved",
    hasConflict: false,
  },
];

export const mockDataWithConflict = [
  {
    key: 1,
    employeeName: "John Smith",
    absenceType: "Illness",
    startDate: "02/05/2023",
    endDate: "03/05/2023",
    approvalStatus: "Pending approval",
    hasConflict: true,
  },
];

export const getData = () => {
  return mockDataWithConflict;
};
