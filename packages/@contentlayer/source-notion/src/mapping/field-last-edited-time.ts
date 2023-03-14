import type { FieldFunctions } from ".";

export const fieldLastEditedTime: FieldFunctions<'last_edited_time'> = {
    getFieldDef: () => {
        return {
            type: 'date',
            isRequired: false
        }
    },
    getFieldData: ({ property }) => {
        return new Date(property.last_edited_time);
    }
}