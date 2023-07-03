const data = [
  {
    color: "red",
    value: "f00",
  },
  {
    color: "green",
    value: "0f0",
  },
  {
    color: "blue",
    value: "00f",
  },
  {
    color: "cyan",
    value: "0ff",
  },
  {
    color: "magenta",
    value: "f0f",
  },
  {
    color: "yellow",
    value: "ff0",
  },
  {
    color: "black",
    value: "000",
  },
];

export function getAllData() {

  return data;
}

export function addNewData(color, value) {
  return data.unshift({ color: color, value: value });
}

export function getDataByValueAndDelete(value) {
  const found =  data.find((item) => item.value === value);
  
  for(let i=0; i<data.length;i++)
  {
    if(data[i].value===found.value)
    {
       data.splice(i , 1);
     return data;
       return;
    }
  }

}
