export default function groupBy(list: any, keyGetter: any) {
    const map = new Map();
    list.forEach((item: any) => {
         const key = keyGetter(item);
         const collection = map.get(key);
         if (!collection) {
             map.set(key, [item]);
         } else {
             collection.push(item);
         }
    });
    return map;
}

export function getIcon(category: string){
    switch(category){
      case 'Frontend': return 'mdi-remote-desktop'; break;
      case 'Backend': return 'mdi-server'; break;
      case 'DBMS': return 'mdi-database-check'; break;
      case 'Programming Languages': return 'mdi-language-java'; break;
  
    }
  }