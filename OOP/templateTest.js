var employee = {
    ename: null,
    sal: 0,
    bonus: 0,
    viewbonus: function () { },
    showemp: function () {
        console.log("Employee name=" + employee.ename);
        console.log("Salary=" + employee.sal);
    }
};
employee.ename = "Manoj";
employee.sal = 25000;
employee.bonus = employee.sal + 500;
employee.viewbonus = function () {
    console.log("Bonus=" + employee.bonus);
};
employee.showemp();
employee.viewbonus();
