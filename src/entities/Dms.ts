import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Workspaces } from './Workspaces';
import { Users } from './Users';

@Index('WorkspaceId', ['workspaceId'], {})
@Index('SenderId', ['senderId'], {})
@Index('ReceiverId', ['receiverId'], {})
@Entity('dms', { schema: 'sleact' })
export class Dms {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('text', { name: 'content' })
  content: string;

  @Column('datetime', { name: 'createdAt' })
  createdAt: Date;

  @Column('datetime', { name: 'updatedAt' })
  updatedAt: Date;

  @Column('int', { name: 'WorkspaceId', nullable: true })
  workspaceId: number | null;

  @Column('int', { name: 'SenderId', nullable: true })
  senderId: number | null;

  @Column('int', { name: 'ReceiverId', nullable: true })
  receiverId: number | null;

  @ManyToOne(() => Workspaces, (workspaces) => workspaces.Dms, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'WorkspaceId', referencedColumnName: 'id' }])
  Workspace: Workspaces;

  @ManyToOne(() => Users, (users) => users.Dms, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'SenderId', referencedColumnName: 'id' }])
  Sender: Users;

  @ManyToOne(() => Users, (users) => users.Dms2, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ReceiverId', referencedColumnName: 'id' }])
  Receiver: Users;
}
