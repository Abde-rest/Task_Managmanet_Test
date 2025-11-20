"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CalendarClock,
  CheckCircle,
  Clock3,
  LayoutPanelLeft,
  ListChecks,
  Plus,
  User,
  AlertCircle,
  PenSquare,
  Trash2,
} from "lucide-react";

const DashboardPage = () => {
  const taskStats = [
    {
      title: "المهام الكلية",
      value: "32",
      change: "+4 مهام هذا الأسبوع",
      icon: ListChecks,
    },
    {
      title: "قيد التنفيذ",
      value: "11",
      change: "5 مهام متأخرة",
      icon: Clock3,
    },
    {
      title: "مكتملة",
      value: "18",
      change: "92% معدل الإنجاز",
      icon: CheckCircle,
    },
    {
      title: "تنتظر المراجعة",
      value: "3",
      change: "حدثت آخر مهمة منذ ساعة",
      icon: LayoutPanelLeft,
    },
  ];

  const upcomingTasks = [
    {
      title: "تسليم نسخة التصميم للعميل",
      owner: "سارة علي",
      due: "اليوم، 4:00 مساءً",
      priority: "عاجلة",
    },
    {
      title: "مراجعة خطة المحتوى",
      owner: "علي فهد",
      due: "غداً، 9:30 صباحاً",
      priority: "متوسطة",
    },
    {
      title: "تحديث واجهة تسجيل الدخول",
      owner: "محمد حسن",
      due: "الأربعاء، 1:00 ظهراً",
      priority: "عالية",
    },
  ];

  const boardColumns = [
    {
      title: "قيد التخطيط",
      count: 4,
      color: "border-violet-200",
      tasks: [
        {
          id: "TSK-1201",
          title: "تحليل متطلبات تطبيق iOS",
          owner: "ليان سالم",
          due: "23 مارس",
          priority: "متوسطة",
        },
        {
          id: "TSK-1198",
          title: "كتابة وثائق الإصدار 2.1",
          owner: "عمر الشمري",
          due: "25 مارس",
          priority: "منخفضة",
        },
      ],
    },
    {
      title: "قيد التنفيذ",
      count: 6,
      color: "border-blue-200",
      tasks: [
        {
          id: "TSK-1205",
          title: "تنفيذ واجهات لوحة التحكم",
          owner: "سارة علي",
          due: "اليوم",
          priority: "عاجلة",
        },
        {
          id: "TSK-1203",
          title: "دمج API الدفع",
          owner: "محمد حسن",
          due: "غداً",
          priority: "عالية",
        },
      ],
    },
    {
      title: "بانتظار المراجعة",
      count: 2,
      color: "border-amber-200",
      tasks: [
        {
          id: "TSK-1195",
          title: "اختبارات الأداء للخادم",
          owner: "ياسر مجدي",
          due: "22 مارس",
          priority: "متوسطة",
        },
      ],
    },
    {
      title: "مكتملة",
      count: 9,
      color: "border-emerald-200",
      tasks: [
        {
          id: "TSK-1189",
          title: "إطلاق صفحة التسعير",
          owner: "نورة خالد",
          due: "أمس",
          priority: "منخفضة",
        },
      ],
    },
  ];

  const activityLog = [
    {
      title: "تم إنشاء مهمة جديدة",
      description: "أضاف أحمد مهمة (TSK-1206) بناء نظام الإشعارات",
      time: "منذ 5 دقائق",
    },
    {
      title: "تم تحديث الحالة",
      description: "حولت سارة مهمة (TSK-1205) إلى قيد التنفيذ",
      time: "منذ 30 دقيقة",
    },
    {
      title: "تعليق جديد",
      description: "كتب فارس تعليقاً على مهمة (TSK-1202)",
      time: "منذ ساعة",
    },
    {
      title: "مهمة مكتملة",
      description: "أكمل فريق التصميم مهمة (TSK-1189)",
      time: "منذ ساعتين",
    },
  ];

  return (
    <div className="bg-background px-3 py-6 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        {/* Hero */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-primary/80">
              إدارة المهام
            </p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              خطط، نفّذ، وتتبع مهام فريقك
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              واجهة تفاعلية لمتابعة المشاريع اليومية، إضافة مهام جديدة، ومراقبة
              التقدّم عبر كل الفرق بشكل لحظي.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" className="gap-2">
              <CalendarClock className="h-4 w-4" />
              عرض التقويم
            </Button>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              مهمة جديدة
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {taskStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div>
                    <CardTitle className="text-sm font-medium">
                      {stat.title}
                    </CardTitle>
                    <CardDescription>{stat.change}</CardDescription>
                  </div>
                  <span className="rounded-full bg-primary/10 p-2 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-semibold">{stat.value}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Create Task + Upcoming */}
        <div className="grid gap-4 lg:grid-cols-[2fr,1fr]">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>إنشاء مهمة جديدة</CardTitle>
              <CardDescription>
                جهّز تفاصيل المهمة ودع فريقك يلتزم بالموعد.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">عنوان المهمة</label>
                <input
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="مثال: تصميم واجهة الإعدادات"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">القسم</label>
                <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
                  <option>التصميم</option>
                  <option>المحتوى</option>
                  <option>البرمجة</option>
                  <option>التسويق</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium">الوصف</label>
                <textarea
                  rows={4}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="أضف تفاصيل أكثر للمهمة..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">المسؤول</label>
                <input
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="اختر اسم العضو"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">درجة الأولوية</label>
                <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
                  <option>عاجلة</option>
                  <option>عالية</option>
                  <option>متوسطة</option>
                  <option>منخفضة</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">التاريخ</label>
                <input
                  type="date"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">المدة التقديرية</label>
                <input
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="مثال: 5 أيام"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                حفظ المهمة
              </Button>
              <Button variant="outline">حفظ كمسودة</Button>
            </CardFooter>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>المواعيد القادمة</CardTitle>
              <CardDescription>
                تتبّع أقرب تسليمات تحتاج لفريقك.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingTasks.map((task) => (
                <div
                  key={task.title}
                  className="rounded-lg border bg-muted/40 p-3">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{task.title}</p>
                    <Badge variant="secondary">{task.priority}</Badge>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <User className="h-3.5 w-3.5" />
                    <span>{task.owner}</span>
                    <span className="mx-1">•</span>
                    <CalendarClock className="h-3.5 w-3.5" />
                    <span>{task.due}</span>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                عرض كل التذكيرات
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Board */}
        <div className="space-y-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold">لوحة تقدم المهام</h2>
              <p className="text-muted-foreground text-sm">
                رؤية سريعة لكل حالة من حالات سير العمل.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
              <Badge className="bg-blue-100 text-blue-800" variant="secondary">
                6 قيد التنفيذ
              </Badge>
              <Badge
                className="bg-amber-100 text-amber-800"
                variant="secondary">
                2 تنتظر المراجعة
              </Badge>
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-4">
            {boardColumns.map((column) => (
              <Card key={column.title} className={`shadow-sm ${column.color}`}>
                <CardHeader className="flex flex-col gap-1 pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{column.title}</CardTitle>
                    <Badge variant="outline">{column.count}</Badge>
                  </div>
                  <CardDescription>
                    {column.count} مهام في هذا المسار
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {column.tasks.map((task) => (
                    <div
                      key={task.id}
                      className="rounded-lg border bg-background p-3 shadow-xs">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{task.id}</Badge>
                        <Badge
                          className="bg-primary/10 text-primary"
                          variant="secondary">
                          {task.priority}
                        </Badge>
                      </div>
                      <p className="mt-2 font-medium">{task.title}</p>
                      <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="h-3.5 w-3.5" />
                          {task.owner}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock3 className="h-3.5 w-3.5" />
                          {task.due}
                        </span>
                      </div>
                      <div className="mt-3 flex items-center justify-end gap-2 text-xs">
                        <Button size="sm" variant="ghost" className="px-2">
                          <PenSquare className="h-3.5 w-3.5" />
                        </Button>
                        <Button size="sm" variant="ghost" className="px-2">
                          <Trash2 className="h-3.5 w-3.5 text-destructive" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  {column.tasks.length === 0 && (
                    <div className="rounded-lg border border-dashed bg-muted/30 p-6 text-center text-sm text-muted-foreground">
                      لا توجد مهام حالياً
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Activity & Timeline */}
        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>سجل النشاط</CardTitle>
              <CardDescription>ما يحدث الآن داخل المشاريع.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {activityLog.map((activity) => (
                <div key={activity.title} className="flex gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                تحميل المزيد
              </Button>
            </CardFooter>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>تسلسل الإنجاز الأسبوعي</CardTitle>
              <CardDescription>
                استخدمه لعرض شريط تقدم أو خط زمني لاحقاً.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-64 w-full items-center justify-center rounded-xl border border-dashed bg-muted/50">
                <div className="text-center">
                  <Clock3 className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />
                  <p className="text-muted-foreground text-sm">
                    ضع مخططاً أو جدولاً زمنياً هنا لاحقاً
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
