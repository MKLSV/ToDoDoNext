import axios from "axios";


const API_URL = process.env.NODE_ENV === 'production'
    ? '/api/tasks'
    : '//localhost:3000/api/tasks'

export const todoService = {
    query,
    save,
    addTodo,
    remove,
}

async function query() {
    try {
        const response = await axios.get(API_URL);
        return response.data;
        // return data;
    } catch (error) {
        console.error("Ошибка при получении задач:", error);
        throw error;
    }
}


async function updatedTodo(updatedTask) {
    try {
        const response = await axios.put(`${API_URL}/${updatedTask._id}`, updatedTask);
        return response.data;
    } catch (error) {
        console.error("Ошибка при обновлении задачи:", error);
        throw error;
    }
}

async function remove(id) {
    try {
        await axios.delete(`${API_URL}/${id}`);
        return { message: "Task deleted" };
    } catch (error) {
        console.error("Ошибка при удалении задачи:", error);
        throw error;
    }
}


async function addTodo(newTask) {
    try {
        const response = await axios.post(API_URL, newTask);
        return response.data; // Возвращаем добавленную задачу
    } catch (error) {
        console.error("Ошибка при добавлении задачи:", error);
        throw error;
    }
}

async function save(todo) {
    return (todo._id) ? updatedTodo(todo) : addTodo(todo)
}

const data = [
    {
        "_id": 1,
        "text": "Закончить проект ToDo",
        "isCompleted": false,
        "createdAt": 1732490400000,
        "dueDate": 1732576800000,
        "type": "задача",
        "repeat": false,
        "repeatFrequency": null,
        "owner": "для всех"
    },
    {
        "_id": 2,
        "text": "Проверить почту",
        "isCompleted": true,
        "createdAt": 1732402200000,
        "dueDate": null,
        "type": "задача",
        "repeat": true,
        "repeatFrequency": "каждый день",
        "owner": "Матвей"
    },
    {
        "_id": 3,
        "text": "Купить продукты",
        "isCompleted": false,
        "createdAt": 1732416300000,
        "dueDate": null,
        "type": "покупки",
        "repeat": true,
        "repeatFrequency": "каждую неделю",
        "owner": "Делайла"
    },
    {
        "_id": 4,
        "text": "Прочитать книгу на 20 страниц",
        "isCompleted": false,
        "createdAt": 1732336800000,
        "dueDate": 1732423200000,
        "type": "задача",
        "repeat": false,
        "repeatFrequency": null,
        "owner": "для всех"
    },
    {
        "_id": 5,
        "text": "Оплатить аренду квартиры",
        "isCompleted": true,
        "createdAt": 1732253700000,
        "dueDate": null,
        "type": "постоянный расход",
        "repeat": true,
        "repeatFrequency": "каждый месяц",
        "owner": "Матвей"
    },
    {
        "_id": 6,
        "text": "Забронировать билеты в кино",
        "isCompleted": false,
        "createdAt": 1732261800000,
        "dueDate": 1732270000000,
        "type": "задача",
        "repeat": false,
        "repeatFrequency": null,
        "owner": "Делайла"
    },
    {
        "_id": 7,
        "text": "Купить подарки на день рождения",
        "isCompleted": false,
        "createdAt": 1732178700000,
        "dueDate": 1732300000000,
        "type": "покупки",
        "repeat": true,
        "repeatFrequency": "каждый год",
        "owner": "для всех"
    },
    {
        "_id": 8,
        "text": "Подготовить презентацию для встречи",
        "isCompleted": false,
        "createdAt": 1732092000000,
        "dueDate": 1732188000000,
        "type": "задача",
        "repeat": false,
        "repeatFrequency": null,
        "owner": "Матвей"
    },
    {
        "_id": 9,
        "text": "Заплатить за интернет",
        "isCompleted": true,
        "createdAt": 1732072800000,
        "dueDate": null,
        "type": "постоянный расход",
        "repeat": true,
        "repeatFrequency": "каждый месяц",
        "owner": "Делайла"
    },
    {
        "_id": 10,
        "text": "Сделать зарядку утром",
        "isCompleted": false,
        "createdAt": 1731982200000,
        "dueDate": null,
        "type": "задача",
        "repeat": true,
        "repeatFrequency": "каждый день",
        "owner": "для всех"
    },
    {
        "_id": 11,
        "text": "Купить новые наушники",
        "isCompleted": true,
        "createdAt": 1731908400000,
        "dueDate": null,
        "type": "покупки",
        "repeat": false,
        "repeatFrequency": null,
        "owner": "Матвей"
    },
    {
        "_id": 12,
        "text": "Составить бюджет на месяц",
        "isCompleted": false,
        "createdAt": 1731826800000,
        "dueDate": null,
        "type": "задача",
        "repeat": true,
        "repeatFrequency": "каждый месяц",
        "owner": "Делайла"
    },
    {
        "_id": 13,
        "text": "Оплатить счета за коммунальные услуги",
        "isCompleted": false,
        "createdAt": 1731747600000,
        "dueDate": 1731834000000,
        "type": "постоянный расход",
        "repeat": true,
        "repeatFrequency": "каждый месяц",
        "owner": "Матвей"
    },
    {
        "_id": 14,
        "text": "Купить билеты на поезд",
        "isCompleted": true,
        "createdAt": 1731671400000,
        "dueDate": null,
        "type": "покупки",
        "repeat": false,
        "repeatFrequency": null,
        "owner": "для всех"
    },
    {
        "_id": 15,
        "text": "Изучить новую тему по программированию",
        "isCompleted": false,
        "createdAt": 1731595200000,
        "dueDate": 1731768000000,
        "type": "задача",
        "repeat": false,
        "repeatFrequency": null,
        "owner": "Делайла"
    }
]