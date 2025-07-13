import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  MapPin, 
  Clock, 
  Users, 
  DollarSign,
  Activity,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Truck,
  CheckCircle,
  Filter,
  MoreHorizontal,
  Phone,
  Navigation
} from 'lucide-react';

const DashboardVisualization = () => {
  const [animatedRevenue, setAnimatedRevenue] = useState(0);
  const [animatedJobs, setAnimatedJobs] = useState(0);
  const [animatedEfficiency, setAnimatedEfficiency] = useState(0);
  const [selectedMetric, setSelectedMetric] = useState('revenue');
  const [viewMode, setViewMode] = useState('today');
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const revenueInterval = setInterval(() => {
        setAnimatedRevenue(prev => {
          if (prev >= 125000) {
            clearInterval(revenueInterval);
            return 125000;
          }
          return prev + 2500;
        });
      }, 20);

      const jobsInterval = setInterval(() => {
        setAnimatedJobs(prev => {
          if (prev >= 47) {
            clearInterval(jobsInterval);
            return 47;
          }
          return prev + 1;
        });
      }, 50);

      const efficiencyInterval = setInterval(() => {
        setAnimatedEfficiency(prev => {
          if (prev >= 94) {
            clearInterval(efficiencyInterval);
            return 94;
          }
          return prev + 2;
        });
      }, 30);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const chartData = [
    { month: 'Jan', value: 45, color: 'bg-orange-500', revenue: 95000 },
    { month: 'Feb', value: 52, color: 'bg-orange-400', revenue: 108000 },
    { month: 'Mar', value: 48, color: 'bg-orange-500', revenue: 98000 },
    { month: 'Apr', value: 61, color: 'bg-orange-600', revenue: 125000 },
    { month: 'May', value: 55, color: 'bg-orange-500', revenue: 112000 },
    { month: 'Jun', value: 67, color: 'bg-orange-600', revenue: 135000 },
  ];

  const activeJobs = [
    { id: '#4891', customer: 'Johnson Family', location: 'Westminster', time: '09:30', status: 'in-progress', priority: 'high', value: '£1,250' },
    { id: '#4892', customer: 'Metro Office Ltd', location: 'Canary Wharf', time: '11:00', status: 'scheduled', priority: 'medium', value: '£2,800' },
    { id: '#4893', customer: 'Smith Residence', location: 'Kensington', time: '14:30', status: 'completed', priority: 'low', value: '£950' },
    { id: '#4894', customer: 'Tech Startup Co', location: 'Shoreditch', time: '16:00', status: 'scheduled', priority: 'high', value: '£3,200' },
  ];

  const teamMembers = [
    { name: 'Mike Chen', role: 'Driver', status: 'active', jobs: 3, location: 'Westminster' },
    { name: 'Sarah Jones', role: 'Team Lead', status: 'active', jobs: 5, location: 'Canary Wharf' },
    { name: 'Tom Wilson', role: 'Driver', status: 'break', jobs: 2, location: 'Kensington' },
    { name: 'Lisa Brown', role: 'Driver', status: 'active', jobs: 4, location: 'Shoreditch' }
  ];

  const metrics = [
    { key: 'revenue', label: 'Revenue', value: animatedRevenue, prefix: '£', suffix: '', color: 'orange', trend: '+24%' },
    { key: 'jobs', label: 'Active Jobs', value: animatedJobs, prefix: '', suffix: '', color: 'blue', trend: `${animatedJobs}` },
    { key: 'efficiency', label: 'Efficiency', value: animatedEfficiency, prefix: '', suffix: '%', color: 'green', trend: '+8%' },
    { key: 'team', label: 'Team Active', value: 4, prefix: '', suffix: '/5', color: 'purple', trend: '4/5 active' }
  ];

  return (
    <div className="relative max-w-5xl mx-auto mt-16 animate-fade-in-up animation-delay-800">
      {/* Subtle Tablet Frame */}
      <div className="relative">
        {/* Outer Frame - More Subtle with Dark Mode */}
        <div className="bg-gray-100/40 dark:bg-gray-800/40 rounded-[2rem] p-3 shadow-lg">
          {/* Inner Screen */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-[1.6rem] overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
            
            {/* Top Navigation Bar */}
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-b border-gray-100 dark:border-gray-700 px-6 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Truck className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h1 className="text-base font-bold text-gray-900 dark:text-white">RemovalGuru Pro</h1>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Real-time Dashboard</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                    <button 
                      onClick={() => setViewMode('today')}
                      className={`px-3 py-1 text-xs font-medium rounded transition-all ${
                        viewMode === 'today' ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                      }`}
                    >
                      Today
                    </button>
                    <button 
                      onClick={() => setViewMode('week')}
                      className={`px-3 py-1 text-xs font-medium rounded transition-all ${
                        viewMode === 'week' ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                      }`}
                    >
                      Week
                    </button>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-600 dark:text-green-400 font-medium text-xs">Live</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Dashboard Content */}
            <div className="p-5">
              {/* Interactive Metrics Row */}
              <div className="grid grid-cols-4 gap-3 mb-5">
                {metrics.map((metric, index) => (
                  <div 
                    key={metric.key}
                    onClick={() => setSelectedMetric(metric.key)}
                    className={`bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${
                      selectedMetric === metric.key ? 'border-orange-200 dark:border-orange-600 bg-orange-50/50 dark:bg-orange-900/20' : 'border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-2 rounded-lg ${
                        metric.color === 'orange' ? 'bg-orange-100 dark:bg-orange-900/30' :
                        metric.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                        metric.color === 'green' ? 'bg-green-100 dark:bg-green-900/30' :
                        'bg-purple-100 dark:bg-purple-900/30'
                      }`}>
                        {metric.key === 'revenue' && <DollarSign className="w-4 h-4 text-orange-600" />}
                        {metric.key === 'jobs' && <Activity className="w-4 h-4 text-blue-600" />}
                        {metric.key === 'efficiency' && <Target className="w-4 h-4 text-green-600" />}
                        {metric.key === 'team' && <Users className="w-4 h-4 text-purple-600" />}
                      </div>
                      <div className="text-xs text-green-600 dark:text-green-400 font-medium flex items-center gap-1">
                        {metric.key === 'revenue' || metric.key === 'efficiency' ? (
                          <>
                            <TrendingUp className="w-3 h-3" />
                            {metric.trend}
                          </>
                        ) : (
                          <span>{metric.trend}</span>
                        )}
                      </div>
                    </div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">
                      {metric.prefix}{metric.value.toLocaleString()}{metric.suffix}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-3 gap-4">
                
                {/* Interactive Revenue Chart */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Revenue Trend</h3>
                    <div className="flex items-center gap-2">
                      <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                        <Filter className="w-3 h-3 text-gray-400" />
                      </button>
                      <div className="text-xs text-green-600 dark:text-green-400 font-medium flex items-center gap-1">
                        <ArrowUpRight className="w-3 h-3" />
                        24%
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-end gap-2 h-20 mb-3">
                    {chartData.map((item, index) => (
                      <div 
                        key={item.month} 
                        className="flex-1 flex flex-col items-center group cursor-pointer"
                        onMouseEnter={() => {}}
                      >
                        <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-t relative overflow-hidden">
                          <div 
                            className={`${item.color} rounded-t transition-all duration-500 group-hover:opacity-80`}
                            style={{ 
                              height: `${item.value}px`,
                              animationDelay: `${index * 200}ms`
                            }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-400 mt-1 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                          {item.month}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center pt-2 border-t border-gray-100 dark:border-gray-700">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      £{selectedMetric === 'revenue' ? animatedRevenue.toLocaleString() : '125,000'}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">This Month</div>
                  </div>
                </div>

                {/* Interactive Jobs List */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Active Jobs</h3>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-orange-500" />
                      <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                        <MoreHorizontal className="w-3 h-3 text-gray-400" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {activeJobs.slice(0, 3).map((job, index) => (
                      <div 
                        key={job.id} 
                        className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all duration-200 ${
                          selectedJob === job.id ? 'bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-600' : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                        onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${
                            job.status === 'completed' ? 'bg-green-400' :
                            job.status === 'in-progress' ? 'bg-orange-400 animate-pulse' :
                            'bg-blue-400'
                          }`}></div>
                          <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">{job.customer}</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-2">
                              <span>{job.location}</span>
                              {selectedJob === job.id && (
                                <>
                                  <span>•</span>
                                  <span>{job.value}</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-right">
                            <div className="text-xs font-medium text-gray-900 dark:text-white">{job.time}</div>
                            <div className={`text-xs px-2 py-1 rounded-full ${
                              job.status === 'completed' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' :
                              job.status === 'in-progress' ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300' :
                              'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                            }`}>
                              {job.status}
                            </div>
                          </div>
                          {selectedJob === job.id && (
                            <div className="flex gap-1">
                              <button className="p-1 hover:bg-orange-100 dark:hover:bg-orange-900/30 rounded">
                                <Phone className="w-3 h-3 text-orange-600" />
                              </button>
                              <button className="p-1 hover:bg-orange-100 dark:hover:bg-orange-900/30 rounded">
                                <Navigation className="w-3 h-3 text-orange-600" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  {selectedJob && (
                    <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        Quick actions available for selected job
                      </div>
                    </div>
                  )}
                </div>

                {/* Interactive Team Status */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Team Status</h3>
                    <Users className="w-4 h-4 text-orange-500" />
                  </div>
                  <div className="space-y-2">
                    {teamMembers.map((member, index) => (
                      <div 
                        key={member.name} 
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-all duration-200 group"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all ${
                            member.status === 'active' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 group-hover:bg-green-200 dark:group-hover:bg-green-900/50' :
                            'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600'
                          }`}>
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">{member.name}</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">{member.role}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{member.jobs} jobs</div>
                          <div className={`text-xs ${
                            member.status === 'active' ? 'text-green-600 dark:text-green-400' : 'text-gray-600 dark:text-gray-400'
                          }`}>
                            {member.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600 dark:text-gray-400">Team efficiency</span>
                      <span className="text-green-600 dark:text-green-400 font-medium">94%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-1">
                      <div 
                        className="bg-green-500 h-1.5 rounded-full transition-all duration-1000"
                        style={{ width: `${animatedEfficiency}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Floating Elements */}
        <div className="absolute -top-1 -right-1 w-12 h-12 bg-gradient-to-br from-orange-400/10 to-orange-600/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-1 -left-1 w-10 h-10 bg-gradient-to-br from-orange-400/10 to-orange-600/10 rounded-full blur-xl"></div>
      </div>
    </div>
  );
};

export default DashboardVisualization;