import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// representação de como o dado ira ser salvo dentro da aplicação
@Entity('appointment')
class Appointment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    provider: string;

    @Column('time with time zone')
    date: Date;
}

export default Appointment;
