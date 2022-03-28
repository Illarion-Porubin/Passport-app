import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  userId: string

  @Prop()
  email: string

  @Prop()
  firstName: string

  @Prop()
  secondName: string

  @Prop()
  password: string
}

export const UserSchema = SchemaFactory.createForClass(User)

"Setup MongoDB With Nest.js | Simple + Scaleable"