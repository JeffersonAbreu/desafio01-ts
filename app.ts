import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { SalaryAccount } from "./class/SalaryAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
console.log(peopleAccount);
peopleAccount.deposit(100);
peopleAccount.getName();
peopleAccount.withdraw(50);
peopleAccount.getBalance();
peopleAccount.validateStatus();

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
console.log(companyAccount);
companyAccount.deposit(100);
companyAccount.getName();
companyAccount.withdraw(50);
companyAccount.getLoan(50);
companyAccount.getBalance();
companyAccount.validateStatus();


const salaryAccount: SalaryAccount = new SalaryAccount("Jeff", 30);
console.log(salaryAccount);
salaryAccount.deposit(100);
salaryAccount.getName();
salaryAccount.withdraw(50);
salaryAccount.getBalance();
salaryAccount.validateStatus();