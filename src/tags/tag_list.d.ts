import { TagByte } from "./tag_byte.d.ts";
import { TagByteArray } from "./tag_byte_array.d.ts";
import { TagCompound } from "./tag_compound.d.ts";
import { TagDouble } from "./tag_double.d.ts";
import { TagFloat } from "./tag_float.d.ts";
import { TagInt } from "./tag_int.d.ts";
import { TagIntArray } from "./tag_int_array.d.ts";
import { TagLong } from "./tag_long.d.ts";
import { TagLongArray } from "./tag_long_array.d.ts";
import { TagShort } from "./tag_short.d.ts";
import { TagString } from "./tag_string.d.ts";

/**
 * TAG_List type
 * @type TagList
 */
export type TagList<
    TagType extends TagByte
    | TagShort
    | TagInt
    | TagLong
    | TagFloat
    | TagDouble
    | TagByteArray
    | TagString
    | TagList<TagType>
    | TagCompound
    | TagIntArray
    | TagLongArray
> = TagType[];
