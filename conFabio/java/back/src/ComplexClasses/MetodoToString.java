package ComplexClasses;

class Computer {
    public int ram;
    public String processore;
    public int disco;
    public float polliciSchermo;

    public Computer(int ram, String processore, int disco, float ram1) {
        this.ram = ram;
        this.processore = processore;
        this.disco = disco;
        this.polliciSchermo = polliciSchermo;
    }

    @Override
    public String toString() {
        return "PC con" + this.ram + "GB di ram" + "disco" + this.disco + "processore:" + this.processore;
    }
    public boolean haPiuRamDi(Computer c2) {
        return this.ram > c2.ram;
    }
}

public class MetodoToString {
    public static void main(String[] args) {
        Computer c = new Computer(8, "Ryzen 5700U",458, 14 );
        Computer cc = new Computer(81, "Ryzen 5700U",4358, 134 );

        System.out.println(c);
        System.out.println(c.haPiuRamDi(cc));




    }
}
