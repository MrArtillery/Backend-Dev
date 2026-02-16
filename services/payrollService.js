export const calculateSalary = (basicSalary) => {
    const hra = basicSalary * 0.20;
    const da = basicSalary * 0.10;
    const pf = basicSalary * 0.05;

    const netSalary = basicSalary + hra + da - pf;

    return { basicSalary, hra, da, pf, netSalary };
};
