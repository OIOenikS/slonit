
//mySlice

let arr = ["t", "e", "s", "t"];

function definePosition (position, arrLength) {
  const newPosition = position >= 0? position : (arrLength + position);
  if (newPosition < 0) return 0;
  return newPosition;
}

function mySlice(arr, start = 0, end = arr.length) {
  const newArr = [];
    for (let i = definePosition(start,arr.length); i < definePosition(end,arr.length); i++) {
      newArr.push(arr[i]);
    }
    return newArr;
}

console.log(mySlice(arr, 1, 3));
console.log(mySlice(arr, -2));

//myIndexOf

let arr1 = [1, 0, false, NaN];
let fruits = ['Яблоко', 'Апельсин', 'Яблоко']

function myIndexOf(arr, item, from = 0) {
  for (let i = definePosition(from, arr.length); i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return -1;
}

console.log(myIndexOf(arr1, 0));
console.log(myIndexOf(arr1, false));
console.log(myIndexOf(arr1, null));
console.log(myIndexOf(arr1,  NaN));
console.log(myIndexOf(fruits, 'Яблоко'));

//myIncludes

function myIncludes(arr, item, from = 0) {
  for (let i = definePosition(from, arr.length); i < arr.length; i++) {
    if ((arr[i] === item) || (Number.isNaN(item)) && (Number.isNaN(arr[i]) === Number.isNaN(item))) {
      return true;
    }
  }
  return false;
}

console.log(myIncludes(arr1, 0));
console.log(myIncludes(arr1, false));
console.log(myIncludes(arr1, null));
console.log(myIncludes(arr1,  NaN));
import { useForm } from '@mantine/form';
import { TextInput, Select, Button, Fieldset } from '@mantine/core';
import { find } from 'lodash';
 
type TFormValue = {
  jacketEnv: string,
  jacketPressure: string,
  pipeSpaceEnv: string,
  pipeSpacePressure: string,
  frameEnv: string,
  framePressure: string,
  insulationEnv: string,
  insulationPressure: string,
}
 
interface Part {
  env: string;
  pressure: string;
}
 
const FormMain = () => {
  const data = [
    {
      type: 'Рубашка',
      env: 'Воздух',
      pressure: '6',
    },
    {
      type: 'Трубное пространство',
      env: 'Инертный газ',
      pressure: '9',
    },
    {
      type: 'Корпус',
      env: '',
      pressure: '',
    },
    {
      type: 'Изоляция',
      env: '',
      pressure: '',
    },
  ]
 
  const jacket = find(data, {type: 'Рубашка'})
  const pipeSpace = find(data, {type: 'Трубное пространство'})
  const frame = find(data, {type: 'Корпус'})
  const insulation = find(data, {type: 'Изоляция'})
 
  const form = useForm({
    initialValues: {
      jacketEnv: jacket? jacket.env : '',
      jacketPressure: jacket? jacket.pressure : '',
      pipeSpaceEnv: pipeSpace? pipeSpace.env : '',
      pipeSpacePressure: pipeSpace? pipeSpace.pressure : '',
      frameEnv: frame? frame.env : '',
      framePressure: frame? frame.pressure : '',
      insulationEnv: insulation? insulation.env : '',
      insulationPressure: insulation? insulation.pressure : '',
    },
    validate: {
      jacketEnv: (value, values) => {
        if (values.jacketPressure && !value) {
          return 'Данные об испытательной среде должны быть заполнены при наличии информации о пробном давлении';
        }
        return null;
      },
      jacketPressure: (value, values) => {
        if (values.jacketEnv && !value) {
          return 'Данные о пробном давлении должны быть заполнены при наличии информации об испытательной среде';
        }
        return null;
      },
      pipeSpaceEnv: (value, values) => {
        if (values.pipeSpacePressure && !value) {
          return 'Данные об испытательной среде должны быть заполнены при наличии информации о пробном давлении';
        }
        return null;
      },
      pipeSpacePressure: (value, values) => {
        if (values.pipeSpaceEnv && !value) {
          return 'Данные о пробном давлении должны быть заполнены при наличии информации об испытательной среде';
        }
        return null;
      },
      frameEnv: (value, values) => {
        if (values.framePressure && !value) {
          return 'Данные об испытательной среде должны быть заполнены при наличии информации о пробном давлении';
        }
        return null;
      },
      framePressure: (value, values) => {
        if (values.frameEnv && !value) {
          return 'Данные о пробном давлении должны быть заполнены при наличии информации об испытательной среде';
        }
        return null;
      },
      insulationEnv: (value, values) => {
        if (values.insulationPressure && !value) {
          return 'Данные об испытательной среде должны быть заполнены при наличии информации о пробном давлении';
        }
        return null;
      },
      insulationPressure: (value, values) => {
        if (values.insulationEnv && !value) {
          return 'Данные о пробном давлении должны быть заполнены при наличии информации об испытательной среде';
        }
        return null;
      },
    },
  });
 
  const createPart = (value: {type: string, env: string, pressure: string}) => {
    console.log(`я создаю ${value.type}: ${value.env}, ${value.pressure}`);
  }
  const updatePart = (value: {type: string, env: string, pressure: string}) => {
    console.log(`я редактирую ${value.type}: ${value.env}, ${value.pressure}`);
  }
  const deletePart = (value: {type: string, env: string, pressure: string}) => {
    console.log(`я удаляю ${value.type}: ${value.env}, ${value.pressure}`);
  }
 
  const compareValues = (initValue: Part, currentValue: Part) => {
    return initValue.env === currentValue.env && initValue.pressure === currentValue.pressure;
  }
  
  const convertKey = (type: string) => {
    switch (type) {
      case 'Рубашка': return 'jacket';
      case 'Трубное пространство': return 'pipeSpace';
      case 'Корпус': return 'frame';
      case 'Изоляция': return 'insulation';
      default: return null;
    }
  }
  
  const defineQuery = (
    part: { 
      type: string,
      env: string,
      pressure: string,
    }, 
    values: TFormValue
  ) => {
    const key = convertKey(part.type);
    if (!key) return;
 
    const initEnv = part.env;
    const initPressure = part.pressure;
    const currentEnv = values[`${key}Env`];
    const currentPressure = values[`${key}Pressure`];
  
    const initValues = { env: part.env, pressure: part.pressure };
    const currentValues = { env: currentEnv, pressure: currentPressure };
  
    if (!compareValues(initValues, currentValues) && (initEnv === '' && initPressure === '')) {
      createPart({ type: part.type, env: currentEnv, pressure: currentPressure });
    } else if (!compareValues(initValues, currentValues) && (initEnv !== '' && initPressure !== '') && !(currentEnv === null && currentPressure === '')) {
      updatePart({ type: part.type, env: currentEnv, pressure: currentPressure });
    } else if (!compareValues(initValues, currentValues) && (currentEnv === null && currentPressure === '')) {
      deletePart({ type: part.type, env: currentEnv, pressure: currentPressure });
    }
  }
 
  const handleSubmit = (values: TFormValue) => {
    data.forEach((part) => defineQuery(part,values))
  }
 
  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      {data && (data.length !== 0) && data.map((part, index) => {
        const key = convertKey(part.type);
        if (!key) return;
        return (
          <Fieldset key={index} legend={part.type}>
            <Select
              label="Среда"
              data={[
                {
                  value: 'Воздух', 
                  label: 'Воздух'
                },
                {
                  value: 'Инертный газ', 
                  label: 'Инертный газ'
                },
                {
                  value: 'Рабочая среда', 
                  label: 'Рабочая среда'
                }
              ]}
              {...form.getInputProps(`${key}Env`)}
            />
            <TextInput
              label="Давление"
              {...form.getInputProps(`${key}Pressure`)}
            />
          </Fieldset>
        )
      })}
      <Button type="submit">Сохранить</Button>
    </form>
  );
}
 
export default FormMain;