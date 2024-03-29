import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Channels } from './Channels';
import { Users } from './Users';

@Index('UserId', ['userId'], {})
@Entity('ChannelMembers', { schema: 'sleact' })
export class ChannelMembers {
  @Column('datetime', { name: 'createdAt' })
  createdAt: Date;

  @Column('datetime', { name: 'updatedAt' })
  updatedAt: Date;

  @Column('int', { primary: true, name: 'ChannelId' })
  channelId: number;

  @Column('int', { primary: true, name: 'UserId' })
  userId: number;

  @ManyToOne(() => Channels, (channels) => channels.ChannelMembers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ChannelId', referencedColumnName: 'id' }])
  Channel: Channels;

  @ManyToOne(() => Users, (users) => users.ChannelMembers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'UserId', referencedColumnName: 'id' }])
  User: Users;
}
