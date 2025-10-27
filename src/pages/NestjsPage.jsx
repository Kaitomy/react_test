import React, { useState, useEffect } from 'react';

const NestjsPage = () => {
  const [activeTab, setActiveTab] = useState('demo');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [apiStatus, setApiStatus] = useState('disconnected');

  // Реальные API функции для работы с Nest.js
  const apiService = {
    async getUsers() {
      try {
        const response = await fetch('http://127.0.0.1:3005/users', { cache: 'no-store' });
        if (!response.ok) throw new Error('API не доступен');
        return await response.json();
      } catch (error) {
        console.error('Ошибка получения пользователей:', error);
        return [];
      }
    },
    
    async createUser(userData) {
      try {
        const response = await fetch('http://127.0.0.1:3005/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
        if (!response.ok) throw new Error('Ошибка создания пользователя');
        return await response.json();
      } catch (error) {
        console.error('Ошибка создания пользователя:', error);
        throw error;
      }
    },

    async checkApiStatus() {
      try {
        const response = await fetch('http://127.0.0.1:3005/users/health', { cache: 'no-store' });
        if (!response.ok) throw new Error('bad');
        await response.json().catch(() => ({}));
        setApiStatus('connected');
        return true;
      } catch (error) {
        setApiStatus('disconnected');
        return false;
      }
    }
  };

  // Загрузка пользователей
  const loadUsers = async () => {
    setLoading(true);
    try {
      const usersData = await apiService.getUsers();
      setUsers(usersData);
    } catch (error) {
      console.error('Ошибка загрузки:', error);
    } finally {
      setLoading(false);
    }
  };

  // Создание пользователя
  const handleCreateUser = async (e) => {
    e.preventDefault();
    if (!newUser.name || !newUser.email) return;
    
    setLoading(true);
    try {
      const createdUser = await apiService.createUser(newUser);
      setUsers([...users, createdUser]);
      setNewUser({ name: '', email: '' });
    } catch (error) {
      alert('Ошибка создания пользователя. Убедитесь, что Nest.js сервер запущен на порту 3005');
    } finally {
      setLoading(false);
    }
  };

  // Проверка статуса API
  useEffect(() => {
    const checkStatus = async () => {
      await apiService.checkApiStatus();
    };
    checkStatus();
    const interval = setInterval(checkStatus, 5000);
    return () => clearInterval(interval);
  }, []);

  const installationSteps = [
    {
      step: 1,
      title: "Установка Node.js",
      description: "Убедитесь, что у вас установлен Node.js версии 16 или выше",
      command: "node --version",
      code: `// Проверка версии Node.js
node --version
// Должно показать v16.x.x или выше`
    },
    {
      step: 2,
      title: "Установка Nest CLI",
      description: "Установите глобально Nest CLI для создания проектов",
      command: "npm install -g @nestjs/cli",
      code: `// Глобальная установка Nest CLI
npm install -g @nestjs/cli

// Проверка установки
nest --version`
    },
    {
      step: 3,
      title: "Создание проекта",
      description: "Создайте новый Nest.js проект",
      command: "nest new my-nest-app",
      code: `// Создание нового проекта
nest new my-nest-app

// Переход в папку проекта
cd my-nest-app

// Запуск в режиме разработки
npm run start:dev`
    }
  ];

  const integrationSteps = [
    {
      step: 1,
      title: "Создание API в Nest.js",
      description: "Создайте контроллер для API",
      code: `// src/users/users.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return { message: 'Все пользователи' };
  }

  @Post()
  create(@Body() userData: any) {
    return { message: 'Пользователь создан', data: userData };
  }
}`
    },
    {
      step: 2,
      title: "Настройка CORS",
      description: "Настройте CORS для работы с React",
      code: `// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Настройка CORS
  app.enableCors({
    origin: 'http://localhost:3000', // URL вашего React приложения
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  
  await app.listen(3001);
}
bootstrap();`
    },
    {
      step: 3,
      title: "Подключение в React",
      description: "Используйте fetch для подключения к Nest.js API",
      code: `// src/services/api.ts
const API_BASE_URL = 'http://localhost:3001';

export const apiService = {
  async getUsers() {
    const response = await fetch(\`\${API_BASE_URL}/users\`);
    return response.json();
  },
  
  async createUser(userData) {
    const response = await fetch(\`\${API_BASE_URL}/users\`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return response.json();
  }
};`
    }
  ];

  const examples = [
    {
      title: "Простой контроллер",
      description: "Базовый контроллер с GET и POST методами",
      code: `@Controller('api')
export class ApiController {
  @Get('hello')
  getHello() {
    return { message: 'Hello from Nest.js!' };
  }

  @Post('data')
  createData(@Body() data: any) {
    return { message: 'Data created', data };
  }
}`
    },
    {
      title: "Сервис с зависимостями",
      description: "Создание сервиса для бизнес-логики",
      code: `@Injectable()
export class UsersService {
  private users = [];

  findAll() {
    return this.users;
  }

  create(userData: any) {
    const user = { id: Date.now(), ...userData };
    this.users.push(user);
    return user;
  }
}`
    },
    {
      title: "Модуль приложения",
      description: "Организация кода в модули",
      code: `@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}`
    }
  ];

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mb-4">🚀 Nest.js</h1>
          <p className="text-center text-muted mb-5">
            Прогрессивный Node.js фреймворк для создания эффективных и масштабируемых серверных приложений
          </p>
        </div>
      </div>

      {/* Статус API */}
      <div className="row mb-4">
        <div className="col-12">
          <div className={`alert ${apiStatus === 'connected' ? 'alert-success' : 'alert-warning'}`}>
            <strong>Статус API:</strong> 
            {apiStatus === 'connected' ? ' ✅ Подключен к Nest.js серверу' : ' ⚠️ Nest.js сервер не запущен'}
            {apiStatus === 'disconnected' && (
              <div className="mt-2">
                <small>Для работы демо запустите Nest.js сервер: <code>npm run start:dev</code></small>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Навигация по табам */}
      <div className="row mb-4">
        <div className="col-12">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'demo' ? 'active' : ''}`}
                onClick={() => setActiveTab('demo')}
              >
                🚀 Живое демо
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'installation' ? 'active' : ''}`}
                onClick={() => setActiveTab('installation')}
              >
                📦 Установка
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'integration' ? 'active' : ''}`}
                onClick={() => setActiveTab('integration')}
              >
                🔗 Интеграция с React
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'examples' ? 'active' : ''}`}
                onClick={() => setActiveTab('examples')}
              >
                💻 Примеры
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Содержимое табов */}
      {activeTab === 'demo' && (
        <div className="row">
          <div className="col-12">
            <h3 className="mb-4">🚀 Живое демо Nest.js + React</h3>
            
            {/* Форма создания пользователя */}
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="mb-0">Создать пользователя</h5>
              </div>
              <div className="card-body">
                <form onSubmit={handleCreateUser}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="userName" className="form-label">Имя</label>
                        <input
                          type="text"
                          className="form-control"
                          id="userName"
                          value={newUser.name}
                          onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                          placeholder="Введите имя"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="userEmail" className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="userEmail"
                          value={newUser.email}
                          onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                          placeholder="Введите email"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={loading || apiStatus !== 'connected'}
                  >
                    {loading ? 'Создание...' : 'Создать пользователя'}
                  </button>
                </form>
              </div>
            </div>

            {/* Список пользователей */}
            <div className="card mb-4">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Пользователи</h5>
                <button 
                  className="btn btn-outline-primary btn-sm"
                  onClick={loadUsers}
                  disabled={loading || apiStatus !== 'connected'}
                >
                  {loading ? 'Загрузка...' : 'Обновить'}
                </button>
              </div>
              <div className="card-body">
                {loading ? (
                  <div className="text-center">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Загрузка...</span>
                    </div>
                  </div>
                ) : users.length === 0 ? (
                  <div className="text-center text-muted">
                    <p>Нет пользователей. Создайте первого пользователя!</p>
                  </div>
                ) : (
                  <div className="row">
                    {users.map((user, index) => (
                      <div key={index} className="col-md-6 mb-3">
                        <div className="card">
                          <div className="card-body">
                            <h6 className="card-title">{user.name}</h6>
                            <p className="card-text text-muted">{user.email}</p>
                            <small className="text-muted">ID: {user.id}</small>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Инструкции по запуску */}
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">📋 Инструкции по запуску</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <h6>1. Создайте Nest.js проект:</h6>
                    <pre className="bg-dark text-light p-3 rounded">
                      <code>{`npm install -g @nestjs/cli
nest new nest-demo
cd nest-demo`}</code>
                    </pre>
                  </div>
                  <div className="col-md-6">
                    <h6>2. Создайте контроллер:</h6>
                    <pre className="bg-dark text-light p-3 rounded">
                      <code>{`// src/users/users.controller.ts
@Controller('users')
export class UsersController {
  private users = [];

  @Get()
  findAll() {
    return this.users;
  }

  @Post()
  create(@Body() userData: any) {
    const user = { id: Date.now(), ...userData };
    this.users.push(user);
    return user;
  }

  @Get('health')
  health() {
    return { status: 'ok' };
  }
}`}</code>
                    </pre>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <h6>3. Настройте CORS в main.ts:</h6>
                    <pre className="bg-dark text-light p-3 rounded">
                      <code>{`app.enableCors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
});`}</code>
                    </pre>
                  </div>
                  <div className="col-md-6">
                    <h6>4. Запустите сервер:</h6>
                    <pre className="bg-dark text-light p-3 rounded">
                      <code>{`npm run start:dev
# Сервер будет доступен на http://localhost:3005`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'installation' && (
        <div className="row">
          <div className="col-12">
            <h3 className="mb-4">📦 Установка Nest.js</h3>
            {installationSteps.map((step, index) => (
              <div key={index} className="card mb-4">
                <div className="card-header">
                  <h5 className="mb-0">
                    Шаг {step.step}: {step.title}
                  </h5>
                </div>
                <div className="card-body">
                  <p className="card-text">{step.description}</p>
                  <div className="bg-dark text-light p-3 rounded mb-3">
                    <code className="text-success">$ {step.command}</code>
                  </div>
                  <pre className="bg-light p-3 rounded">
                    <code>{step.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'integration' && (
        <div className="row">
          <div className="col-12">
            <h3 className="mb-4">🔗 Интеграция с React</h3>
            {integrationSteps.map((step, index) => (
              <div key={index} className="card mb-4">
                <div className="card-header">
                  <h5 className="mb-0">
                    Шаг {step.step}: {step.title}
                  </h5>
                </div>
                <div className="card-body">
                  <p className="card-text">{step.description}</p>
                  <pre className="bg-light p-3 rounded">
                    <code>{step.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'examples' && (
        <div className="row">
          <div className="col-12">
            <h3 className="mb-4">💻 Примеры кода</h3>
            {examples.map((example, index) => (
              <div key={index} className="card mb-4">
                <div className="card-header">
                  <h5 className="mb-0">{example.title}</h5>
                </div>
                <div className="card-body">
                  <p className="card-text">{example.description}</p>
                  <pre className="bg-light p-3 rounded">
                    <code>{example.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Дополнительная информация */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">📚 Полезные ресурсы</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6>Официальная документация:</h6>
                  <ul>
                    <li><a href="https://nestjs.com/" target="_blank" rel="noopener noreferrer">Nest.js Official</a></li>
                    <li><a href="https://docs.nestjs.com/" target="_blank" rel="noopener noreferrer">Документация</a></li>
                    <li><a href="https://github.com/nestjs/nest" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h6>Основные концепции:</h6>
                  <ul>
                    <li><strong>Controllers</strong> - обработка HTTP запросов</li>
                    <li><strong>Services</strong> - бизнес-логика приложения</li>
                    <li><strong>Modules</strong> - организация кода</li>
                    <li><strong>Dependency Injection</strong> - внедрение зависимостей</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Статистика */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">📊 Статистика</h5>
            </div>
            <div className="card-body">
              <div className="row text-center">
                <div className="col-md-3">
                  <div className="bg-primary text-white p-3 rounded mb-3">
                    <h4>60k+</h4>
                    <p className="mb-0">GitHub Stars</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="bg-success text-white p-3 rounded mb-3">
                    <h4>TypeScript</h4>
                    <p className="mb-0">Полная поддержка</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="bg-info text-white p-3 rounded mb-3">
                    <h4>Express</h4>
                    <p className="mb-0">Под капотом</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="bg-warning text-white p-3 rounded mb-3">
                    <h4>Fastify</h4>
                    <p className="mb-0">Альтернатива</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NestjsPage;
